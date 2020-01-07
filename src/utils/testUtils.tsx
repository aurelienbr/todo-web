/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router-dom';

import messagesEn from '~lang/en';

const locale = 'en';

export function withNavigation(children: any) {
  return <MemoryRouter>{children}</MemoryRouter>;
}

export function withIntl(children: any, messages?: Record<string, any>) {
  return (
    <IntlProvider messages={messages || messagesEn} locale={locale}>
      {children}
    </IntlProvider>
  );
}
