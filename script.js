// This script animates the social media buttons when you hover over them

const socialMediaButtons = document.querySelectorAll('.social-media-buttons a');

socialMediaButtons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.1)';
  });

  button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
  });
});
