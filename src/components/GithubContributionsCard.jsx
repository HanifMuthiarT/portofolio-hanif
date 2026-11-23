import { useEffect, useMemo, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { profile } from '../data/portfolioData';

function generateWeeks(contributions) {
  const sorted = [...contributions].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  const map = new Map(sorted.map((contribution) => [contribution.date, contribution]));
  const lastDate = sorted.length ? new Date(sorted[sorted.length - 1].date) : new Date();
  const end = new Date(lastDate);
  end.setUTCDate(end.getUTCDate() + (6 - end.getUTCDay()));
  const start = new Date(end);
  start.setUTCDate(start.getUTCDate() - 364);
  start.setUTCDate(start.getUTCDate() - start.getUTCDay());

  const weeks = [];
  const current = new Date(start);
  while (current.getTime() <= end.getTime()) {
    const week = [];
    for (let day = 0; day < 7; day += 1) {
      const date = current.toISOString().slice(0, 10);
      week.push(map.get(date) ?? { date, count: 0, level: 0 });
      current.setUTCDate(current.getUTCDate() + 1);
    }
    weeks.push(week);
  }
  return weeks.slice(-53);
}

function generateMonthLabels(weeks) {
  const labels = [];
  let previousMonth = '';
  let lastColumn = -10;

  weeks.forEach((week, index) => {
    const firstDay = week[0];
    if (!firstDay) return;
    const date = new Date(firstDay.date);
    const monthKey = `${date.getUTCFullYear()}-${date.getUTCMonth()}`;

    if (monthKey !== previousMonth) {
      previousMonth = monthKey;
      const column = index + 1;
      if (column - lastColumn < 3) return;
      lastColumn = column;
      labels.push({
        label: date.toLocaleDateString('en-US', { month: 'short', timeZone: 'UTC' }),
        column
      });
    }
  });

  return labels;
}

export function GithubContributionsCard({ t }) {
  const [contributions, setContributions] = useState([]);
  const [total, setTotal] = useState(0);
  const [streak, setStreak] = useState(0);
  const [tooltip, setTooltip] = useState(null);

  useEffect(() => {
    let active = true;
    const fetchContributions = async () => {
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${profile.githubUsername}?y=last`
        );
        if (!response.ok) throw new Error('Failed to fetch GitHub contributions');
        const data = await response.json();
        if (!active) return;

        const contributionData = data.contributions || [];
        const contributionTotal =
          typeof data.total?.lastYear === 'number'
            ? data.total.lastYear
            : contributionData.reduce((sum, contribution) => sum + (contribution.count || 0), 0);

        let currentStreak = 0;
        for (let index = contributionData.length - 1; index >= 0; index -= 1) {
          if (contributionData[index].count > 0) currentStreak += 1;
          else if (currentStreak > 0) break;
        }

        setContributions(contributionData);
        setTotal(contributionTotal);
        setStreak(currentStreak);
      } catch (error) {
        console.warn('Unable to load GitHub contributions:', error);
      }
    };

    fetchContributions();
    return () => {
      active = false;
    };
  }, []);

  const weeks = useMemo(() => generateWeeks(contributions), [contributions]);
  const monthLabels = useMemo(() => generateMonthLabels(weeks), [weeks]);

  return (
    <section className="github-card">
      <div className="github-card-header">
        <div className="github-profile-info">
          <GithubIcon size={29} className="github-card-icon" />
          <div>
            <h2>{total.toLocaleString()} {t('contributions')}</h2>
            <a
              href={`https://github.com/${profile.githubUsername}`}
              target="_blank"
              rel="noreferrer"
              className="github-username"
            >
              <span>@{profile.githubUsername}</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        <div className="github-stats">
          <div className="github-stat-item">
            <strong>{total.toLocaleString()}</strong>
            <span>{t('Total')}</span>
          </div>
          <div className="github-stat-item">
            <strong>{streak}</strong>
            <span>{t('Streak')}</span>
          </div>
        </div>
      </div>

      <div className="github-calendar-wrapper">
        <div
          className="github-calendar-grid"
          role="grid"
          tabIndex={0}
          aria-label="Contribution activity"
        >
          <div className="github-months">
            {monthLabels.map((month, index) => (
              <span key={`${month.label}-${index}`} style={{ gridColumnStart: month.column }}>
                {month.label}
              </span>
            ))}
          </div>

          <div className="github-calendar">
            {weeks.map((week, weekIndex) => (
              <div
                key={weekIndex}
                className="github-week"
                role="row"
                style={{ '--week-index': weekIndex }}
              >
                {week.map((day) => {
                  const count = day.count || 0;
                  const level = Math.min(Math.max(day.level ?? 0, 0), 4);
                  return (
                    <div
                      key={day.date}
                      className={`github-day level-${level}`}
                      role="gridcell"
                      tabIndex={0}
                      aria-label={`${count} contributions on ${day.date}`}
                      onMouseEnter={(event) => {
                        const rect = event.currentTarget.getBoundingClientRect();
                        setTooltip({
                          count,
                          date: day.date,
                          top: rect.top - 40,
                          left: rect.left + rect.width / 2
                        });
                      }}
                      onMouseLeave={() => setTooltip(null)}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {tooltip && (
        <div
          className="github-tip"
          style={{
            position: 'fixed',
            top: tooltip.top,
            left: tooltip.left,
            transform: 'translateX(-50%)',
            zIndex: 9999
          }}
        >
          <strong>{tooltip.count} contributions</strong> on {tooltip.date}
        </div>
      )}

      <div className="github-card-footer">
        <a
          href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile"
          target="_blank"
          rel="noreferrer"
        >
          {t('Learn how we count contributions')}
        </a>
        <div className="github-legend">
          <span>{t('Less')}</span>
          <span className="github-legend-cell level-0" />
          <span className="github-legend-cell level-1" />
          <span className="github-legend-cell level-2" />
          <span className="github-legend-cell level-3" />
          <span className="github-legend-cell level-4" />
          <span>{t('More')}</span>
        </div>
      </div>
    </section>
  );
}
