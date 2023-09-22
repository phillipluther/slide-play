'use client';

import PageTitle from '../../components/page-title';
import Button from '../../components/button';
import { NEXT_SLIDE_URL, PREVIOUS_SLIDE_URL } from '../../consts';

export default function RemocoPage() {
  async function nextSlide(previous = false) {
    const slideUrl = previous ? PREVIOUS_SLIDE_URL : NEXT_SLIDE_URL;

    await fetch(slideUrl, {
      method: 'GET',
      cache: 'no-cache',
    });
  }
  
  return (
    <>
      <PageTitle>Simple Remote Control</PageTitle>
      <p>Try it on your phone!</p>
      
      <div className="flex w-full mt-8">
        <Button onClick={() => nextSlide(true)} className="mr-2">&laquo; Previous Slide</Button>
        <Button onClick={() => nextSlide(false)} className="ml-2">Next Slide &raquo;</Button>
      </div>
    </>
  );
}
