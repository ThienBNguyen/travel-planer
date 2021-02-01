import React from 'react';
import Typewriter from 'typewriter-effect';
export default function IntroText() {
  return (
    <div className="intro">
      <h1 className="intro-header">
        Travel to the most beautiful places in{' '}
        <span className="typed-words">
          {' '}
          <Typewriter
            className="intro-header"
            options={{
              strings: [
                'the world, like Sahara Desert',
                'the world, like Paris',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h1>
    </div>
  );
}
