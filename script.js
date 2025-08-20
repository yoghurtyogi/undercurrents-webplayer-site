document.addEventListener("DOMContentLoaded", function() {
  const audio = document.getElementById('radio-player');
  const offlineMsg = document.getElementById('offline-message');
  const streamUrl = "https://stream.radio.co/sbe04af395/listen";

  audio.src = streamUrl;
  audio.load();

  // If stream is available, hide the offline message
  audio.addEventListener('canplay', function() {
    offlineMsg.style.display = 'none';
    // Try to autoplay (may be blocked by browser)
    audio.play().catch(function(e) {});
  });

  // If stream isn't live, show the message
  audio.addEventListener('error', function() {
    offlineMsg.style.display = 'block';
  });
});