'use client';

import type { ModifierKey, StandardKey } from 'keyboard';
import { useEffect, useRef } from 'react';

const useKeyboardBinding = (modifierKey: ModifierKey, standardKey: StandardKey, action: () => void) => {
  const isModifierPressedRef = useRef<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === modifierKey || modifierKey === 'NULL') {
        isModifierPressedRef.current = true;
      }

      if (event.key === standardKey && isModifierPressedRef.current) {
        event.preventDefault();
        action();
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === modifierKey) {
        isModifierPressedRef.current = false;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [modifierKey, standardKey, action, isModifierPressedRef]);

  return null;
};

export default useKeyboardBinding;
