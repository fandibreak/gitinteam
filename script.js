const users = [
    {
        nickname: 'gustavotremont',
        password: '123456789'
    },
    {
        nickname: 'jalidacdhi',
        password: '987654321'
    },
    {
        nickname: 'data',
        password: 'wewillmissyou'
    }
]

document.getElementById('bt').addEventListener('click', (e) => {
    e.preventDefault();

    let correctData = false;
    const form = document.getElementById('formBody');

    for (const user of users) {
        if(form.user.value == user.nickname || form.psw.value == user.password) correctData = true;
    }
    correctData === true ? alert('tu información es correcta') : alert('alguno de los datos son incorrectos');
})