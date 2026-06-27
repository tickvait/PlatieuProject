function updateDate() {
    const now = new Date();
    
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'Pm' : 'Am';
    const day = now.getDate();
    const month = now.toLocaleString('en-US', { month: 'short' });
    const year = now.getFullYear();

    const formattedDate = `${hours}.${minutes} ${ampm}  ${day} ${month} ${year}`;
    
    document.getElementById('date-field').innerText = formattedDate;
    const randomInt = Math.floor(Math.random() * 100000000000000) + 1;
    const randomdouble = Math.floor(Math.random() * 100000000000000) + 1;
    document.getElementById('ID-field').innerText = randomInt;
    document.getElementById('TypeServ-field').innerText = "Dine-In";

    let rawValue = Math.random() * (40 - 10) + 10; 
    let fixedString = rawValue.toFixed(2); 
    let fixedNumber = Number(rawValue.toFixed(2)); 
    document.getElementById('Money-field').innerText = "$" + fixedNumber;
}
