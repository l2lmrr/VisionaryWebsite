function initMap() {
    const location = { lat: -34.397, lng: 150.644 }; // Replace with your coordinates
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
        styles: [
            { elementType: 'geometry', stylers: [{ color: '#212121' }] },
            { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#212121' }] },
            { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#191970' }] },
            { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#ffffff' }] }
        ]
    });
    new google.maps.Marker({
        position: location,
        map: map,
    });
}
// Example of a simple alert on login button click
document.querySelector('.login-button').addEventListener('click', function() {
    alert('Login button clicked!');
});
