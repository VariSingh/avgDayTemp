export const options:any = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false
    }
  }, xAxes: {
    type:'time'
  },
  scales: {
    y: {
      title: {
        display: true,
        text: 'Temprature °C'
      }
    },
    x: {
      title: {
        display: true,
        text: 'Date'
      }
    }
  }
};

export const data:any = {
  datasets: [
    {
      label: 'Temprature',
      data: [],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ]
};