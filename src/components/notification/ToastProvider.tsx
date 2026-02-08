
'use client';

import * as ReactToastify from 'react-toastify';

export const ToastProvider: React.FC = () => {
  const ToastContainer =
    ReactToastify.ToastContainer ??
    (ReactToastify as { default?: { ToastContainer?: React.ComponentType } })
      .default?.ToastContainer;
  const Transition =
    ReactToastify.Bounce ??
    (ReactToastify as { default?: { Bounce?: React.ComponentType } }).default
      ?.Bounce;

  if (!ToastContainer || !Transition) {
    return null;
  }

  return (
    <ToastContainer
      position="top-right"
      transition={Transition}
      autoClose={8000}
      hideProgressBar={false}
      toastStyle={{
        backgroundColor: '#ffffff',
        color: '#111827',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.12)',
      }}
      draggable={false}
      closeOnClick={true}
      pauseOnHover={true}
    />
  );
};
