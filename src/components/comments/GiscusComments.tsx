'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Giscus from '@giscus/react';
import type { GiscusConfig } from './types';

interface GiscusCommentsProps {
  config: GiscusConfig;
  className?: string;
}

export default function GiscusComments({ config, className }: GiscusCommentsProps) {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`animate-pulse bg-secondary rounded-lg h-32 ${className}`}>
        <div className="p-4">
          <div className="h-4 bg-muted rounded w-1/4 mb-2"></div>
          <div className="h-3 bg-muted rounded w-full mb-1"></div>
          <div className="h-3 bg-muted rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  // 根据当前主题确定 Giscus 主题
  const getGiscusTheme = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;
    return currentTheme === 'dark' ? 'dark' : 'light';
  };

  return (
    <div className={`giscus-container ${className}`}>
      <Giscus
        repo={config.repo}
        repoId={config.repoId}
        category={config.category}
        categoryId={config.categoryId}
        mapping={config.mapping}
        strict={config.strict ?? true ? '1' : '0'}
        reactionsEnabled={config.reactionsEnabled ?? true ? '1' : '0'}
        emitMetadata={config.emitMetadata ?? false ? '1' : '0'}
        inputPosition={config.inputPosition ?? 'bottom'}
        theme={getGiscusTheme()}
        lang={config.lang ?? 'zh-CN'}
        loading="lazy"
      />
    </div>
  );
}
