'use client';

export default function Stats() {
  const stats = [
    { number: '12K+', label: 'PARTICIPANTS' },
    { number: '48', label: 'EVENTS' },
    { number: '₹5L', label: 'PRIZE POOL' },
    { number: '3', label: 'DAYS' },
    { number: '120+', label: 'COLLEGES' },
  ];

  return (
    <div className="stats">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="stat"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            animation: `fadeUp 0.6s ease ${i * 0.07}s both`,
          }}
        >
          <div className="stat-n">{stat.number}</div>
          <div className="stat-l">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
