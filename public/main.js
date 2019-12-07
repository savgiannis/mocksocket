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

  $('#insuranceEmailError').click(() => {
    axios.get('http://localhost:3000/insuranceEmailError');
  });

  $('#insuranceAboutToExpire').click(() => {
    axios.get('http://localhost:3000/insuranceAboutToExpire');
  });

  $('#insuraceExpired').click(() => {
    axios.get('http://localhost:3000/insuraceExpired');
  });


}); 