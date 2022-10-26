import { PropsWithChildren, ReactElement } from 'react';
import { CautionIcon, InfoIcon, SuccessIcon, WarningIcon } from './icons';

export type CalloutType = 'info' | 'caution' | 'warning' | 'success';

export interface Props extends PropsWithChildren {
  type: CalloutType;
}

const ICON_MAP: Record<CalloutType, ReactElement> = {
  info: <InfoIcon />,
  warning: <WarningIcon />,
  caution: <CautionIcon />,
  success: <SuccessIcon />,
};

const COLOR_MAP: Record<CalloutType, string> = {
  info: 'bg-slate-50 border-color-divider',
  warning: 'bg-orange-50 border-orange-200',
  caution: 'bg-pink-50 border-pink-200',
  success: 'bg-teal-50 border-teal-200',
};

export const Callout: React.FC<Props> = ({ type, children }) => {
  return (
    <div
      className={`callout my-3 px-3 py-2 rounded-lg border grid grid-cols-[20px_1fr] gap-3 ${COLOR_MAP[type]}`}
    >
      {ICON_MAP[type]}
      <div className="text-color-default font-sans text-small">{children}</div>
    </div>
  );
};
