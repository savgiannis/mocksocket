$(function () {

  $('#ta-approve').click(() => {
    axios.get('http://localhost:3000/taResponse', {
      params: {
        action: 'approve'
      }
    });
  })

  $('#ta-decline').click(() => {
    axios.get('http://localhost:3000/taResponse', {
      params: {
        action: 'decline'
      }
    });
  });


  $('#doctor-approve').click(() => {
    axios.get('http://localhost:3000/doctorResponse', {
      params: {
        action: 'approve'
      }
    });
  })

  $('#doctor-decline').click(() => {
    axios.get('http://localhost:3000/doctorResponse', {
      params: {
        action: 'decline'
      }
    });
  });

});