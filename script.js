document.addEventListener("DOMContentLoaded", function() {
  const audio = document.getElementById('radio-player');
  const offlineMsg = document.getElementById('offline-message');
  const streamUrl = "https://stream.radio.co/sbe04af395/listen";

  // Try to play the stream
  audio.src = streamUrl;
  audio.load();

  // Try to play automatically when possible
  audio.addEventListener('canplay', function() {
    audio.style.display = 'block';
    offlineMsg.style.display = 'none';
    audio.play().catch(function(e) {
      // Autoplay might fail due to browser policies
    });
  });

  // If there's an error, show offline message
  audio.addEventListener('error', function() {
    audio.style.display = 'none';
    offlineMsg.style.display = 'block';
  });
});