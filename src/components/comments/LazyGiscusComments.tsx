'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect, useRef } from 'react';
import type { GiscusConfig } from './types';

const GiscusComments = dynamic(
  () => import('./GiscusComments'),
  {
    ssr: false,
    loading: () => (
      <div className="animate-pulse bg-secondary rounded-lg h-32">
        <div className="p-4">
          <div className="h-4 bg-muted rounded w-1/4 mb-2"></div>
          <div className="h-3 bg-muted rounded w-full mb-1"></div>
          <div className="h-3 bg-muted rounded w-3/4"></div>
        </div>
      </div>
    ),
  }
);

interface LazyGiscusCommentsProps {
  config: GiscusConfig;
  className?: string;
}

export default function LazyGiscusComments({ config, className }: LazyGiscusCommentsProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          // 延迟加载，给用户一点时间看到内容
          const timer = setTimeout(() => {
            setShouldLoad(true);
          }, 300);
          
          observer.disconnect();
          return () => clearTimeout(timer);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '100px 0px' // 提前100px开始加载
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {isVisible && !shouldLoad && (
        <div className="animate-pulse bg-secondary rounded-lg h-32">
          <div className="p-4">
            <div className="h-4 bg-muted rounded w-1/4 mb-2"></div>
            <div className="h-3 bg-muted rounded w-full mb-1"></div>
            <div className="h-3 bg-muted rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-muted rounded w-1/2"></div>
          </div>
        </div>
      )}
      {shouldLoad && <GiscusComments config={config} />}
    </div>
  );
}
