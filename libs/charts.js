// const ctx = document.getElementById('myChart');
const ctx = document.getElementsByTagName('canvas')[0];

new Chart(ctx, {
    type: 'bar',
    data: {
    labels: ['Sat', 'Sun', 'Mon', 'Tus', 'Wed', 'Ther', 'Fri'],
    datasets: [
        {
        label: 'Prog',
        data: [12, 19, 3, 5, 2, 3,25],
        borderWidth: 1
        },
        {
            label: 'math',
            data: [33, 22, 15, 19, 50, 60, 13],
            borderWidth: 0
        },
        {
            label: 'phic',
            data: [33, 22, 15, 50, 50, 60, 13],
            borderWidth: 3
        },
        {
            label: 'adsda',
            data: [33, 22, 15, 19, 33, 60, 13],
            borderWidth: 5
        }
    ]
    },
    options: {
    scales: {
        y: {
        beginAtZero: true
        }
    }
    }
});