import React from 'react';

interface IGreenButtonProps {
  title: string;
  isSubmitButton: boolean;
  onButtonClick?: () => void;
}

const defaultProps = {
  onButtonClick: (v: void) => v,
};

function GreenButton({
  title,
  isSubmitButton,
  onButtonClick,
}: IGreenButtonProps & typeof defaultProps) {
  return (
    <button
      type={isSubmitButton ? 'submit' : 'button'}
      onClick={onButtonClick}
      className="h-10 w-full bg-teal-700 text-white rounded-lg relative
      justify-self-end font-mono font-semibold text-base disabled:opacity-50 disabled:pointer-events-none sm:w-52"
    >
      <span>{title}</span>
    </button>
  );
}

GreenButton.defaultProps = defaultProps;

export default GreenButton;
