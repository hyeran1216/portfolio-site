import { inrange } from '@/utils/inRange.ts';
import registDragEvent from '@/utils/registDragEvent';
import { useState } from 'react';

interface CarouselProps {
    imageList: string[]; // 선택값: 기본 1:1 비율
  }
  
  export default function Carousel({ imageList }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transX, setTransX] = useState(0);
  const [dragging, setDragging] = useState(false);

  const slideList = imageList;
  const slideWidth = 528; // 슬라이드 너비 + gap
  const maxIndex = imageList.length - 1;

  return (
    <>
      <div
        className="flex w-full mx-auto"
        style={{
          overflow: 'hidden',
        }}
      >
        <div
          className="flex gap-4"
          style={{
            transform: `translateX(${-currentIndex * slideWidth + transX}px)`,
            transition: `transform ${dragging ? 0 : 600}ms ease-in-out`,
          }}
          {...registDragEvent({
            onDragChange: (deltaX) => {
              setDragging(true);
              setTransX(deltaX);
            },
            onDragEnd: (deltaX) => {
              const slideChange = -Math.round(deltaX / slideWidth);
              const newIndex = currentIndex + slideChange;
              setCurrentIndex(inrange(newIndex, 0, maxIndex));

              setDragging(false);
              setTransX(0);
            },
          })}
        >
          {slideList.map((url, i) => (
            <div key={i} className="flex-shrink-0 gap-4" style={{ width: `${slideWidth}px` }}>
              <img draggable={false} src={url} alt="img" width="100%" height="auto" className="rounded-lg border border-gray-300" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}