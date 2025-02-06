function calculateAge() {
    const birthDate = new Date(document.getElementById('birthDate').value);
    const currentDate = new Date();

    if (!birthDate || birthDate > currentDate) {
        document.getElementById('ageResult').innerText = 'Введите корректную дату рождения!';
        return;
    }

    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById('ageResult').innerText = `Возраст: ${years} лет, ${months} месяцев, ${days} дней`;
}
