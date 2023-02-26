import React from 'react';
import Div from 'technical/type/div';
import Button from 'ui/button';

interface AboutMeButtonProps extends Div<HTMLButtonElement> {
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
