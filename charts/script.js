document.addEventListener('DOMContentLoaded', () => {
    const followersChartCtx = document.getElementById('followersChart').getContext('2d');
    const platformChartCtx = document.getElementById('platformChart').getContext('2d');
  
    new Chart(followersChartCtx, {
      type: 'line',
      data: {
        labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        datasets: [{
          label: 'Followers',
          data: [95000, 102000, 108000, 115000, 120000, 124856],
          borderColor: '#4F46E5',
          backgroundColor: 'rgba(79, 70, 229, 0.1)',
          fill: true
        }]
      }
    });
  
    new Chart(platformChartCtx, {
      type: 'bar',
      data: {
        labels: ['Instagram', 'Twitter', 'LinkedIn', 'YouTube'],
        datasets: [
          { label: 'Engagement Rate', data: [4.2, 3.8, 2.9, 5.5], backgroundColor: '#10B981' },
          { label: 'Posts', data: [450, 892, 156, 72], backgroundColor: '#2563EB' }
        ]
      }
    });
  });
  