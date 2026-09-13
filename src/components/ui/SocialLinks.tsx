import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { profileData } from '../../data/profile';
import { cn } from '../../lib/utils';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  showLabels?: boolean;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className,
  iconSize = 18,
  showLabels = false
}) => {
  const links = [
    {
      name: 'GitHub',
      url: profileData.github,
      icon: <GithubIcon size={iconSize} />,
      label: 'github.com/samarthpatel-dev'
    },
    {
      name: 'LinkedIn',
      url: profileData.linkedin,
      icon: <LinkedinIcon size={iconSize} />,
      label: 'linkedin.com/in/samarth-patel-dev'
    },
    ...(profileData.twitter
      ? [
          {
            name: 'Twitter',
            url: profileData.twitter,
            icon: <TwitterIcon size={iconSize} />,
            label: '@samarth_dev'
          }
        ]
      : []),
    {
      name: 'Email',
      url: `mailto:${profileData.email}`,
      icon: <Mail size={iconSize} />,
      label: profileData.email
    }
  ];

  return (
    <div className={cn('flex items-center gap-3.5 flex-wrap', className)}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target={link.url.startsWith('mailto:') ? undefined : '_blank'}
          rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded px-1.5 py-1 -mx-1.5 -py-1"
          aria-label={link.name}
          title={link.name}
        >
          <span className="shrink-0">{link.icon}</span>
          {showLabels && <span className="font-mono text-xs">{link.label}</span>}
        </a>
      ))}
    </div>
  );
};
