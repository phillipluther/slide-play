import Button from './button';

export default function Controls({
  disablePrevious = false,
  disableNext = false,
  onPrevious = () => undefined,
  onNext = () => undefined,
}: {
  disablePrevious?: boolean,
  disableNext?: boolean,
  onPrevious?: Function,
  onNext?: Function,
}) {
  return (
    <div>
      <Button 
        onClick={(e: Event) => !disablePrevious && onPrevious(e)}
        disabled={disablePrevious}
        className="mr-4 mt-4"
      >
        Previous Slide
      </Button>
      
      <Button
        onClick={(e: Event) => !disableNext && onNext(e)}
        disabled={disableNext}
        className="mt-4"
      >
        Next Slide
      </Button>
    </div>
  );
}
