import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
export default function IntroText() {
  return (
    <div class="intro">
      <h1 class="intro-header">
        Travel to the most beautiful places in{' '}
        <span class="typed-words">
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
