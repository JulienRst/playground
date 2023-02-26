import React from 'react';
import ReactHTMLElement from 'technical/type/reactHTMLElement';
import Button from 'ui/button';

interface AboutMeButtonProps extends ReactHTMLElement<HTMLButtonElement> {
  goToAboutMe: () => void;
}
const AboutMeButton: React.FC<AboutMeButtonProps> = ({
  goToAboutMe,
  ...props
}) => {
  return (
    <Button onClick={goToAboutMe} {...props}>
      About Me
    </Button>
  );
};

export default AboutMeButton;
