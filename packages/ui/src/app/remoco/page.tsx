'use client';

import PageTitle from '../../components/page-title';
import Wrapper from '../../components/wrapper';
import Button from '../../components/button';
import { NEXT_SLIDE_URL, PREVIOUS_SLIDE_URL } from '../../consts';

export default function RemocoPage() {
  async function nextSlide(previous = false) {
    const slideUrl = previous ? PREVIOUS_SLIDE_URL : NEXT_SLIDE_URL;

    await fetch(slideUrl, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
    });
  }
  
  return (
    <Wrapper as="main">
      <PageTitle>Simple Remote Control</PageTitle>
      <p>Try it on your phone!</p>
      
      <div className="flex w-100 mt-8">
        <Button onClick={() => nextSlide(true)} className="mr-2">&laquo; Previous Slide</Button>
        <Button onClick={() => nextSlide(false)} className="ml-2">Next Slide &raquo;</Button>
      </div>
    </Wrapper>
  );
}