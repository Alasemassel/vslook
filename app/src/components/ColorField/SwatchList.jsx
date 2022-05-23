import { CheckIcon } from '@heroicons/react/outline';
import * as Tooltip from '@radix-ui/react-tooltip';
import { colord } from 'colord';
import { memo } from 'react';

const SwatchList = ({ value, colors, activeRef, onClose, onChange }) => {
  const handleClick = newValue => {
    onClose();
    onChange(newValue, { select: true });
  };
  return (
    <div className='grid grid-cols-5'>
      {colors.map(([name, val]) => {
        const Colord = colord(val);
        const newVal = val ? Colord.toHex() : undefined;
        const isActive = value && val ? Colord.isEqual(value) : val === value;

        return (
          <Tooltip.Root key={name}>
            <Tooltip.Trigger
              ref={isActive ? activeRef : null}
              className={`pointer relative h-8 transform-gpu overflow-hidden bg-white duration-150 hover:z-10 hover:scale-125 ${
                !!val ? 'bg-pattern-rectangle' : 'bg-pattern-stripe'
              }`}
              onClick={() => handleClick(newVal)}
              onMouseOver={() => onChange(newVal)}
              onMouseLeave={() => onChange(value, { revert: true })}
            >
              <i style={{ background: val }} className='flex h-full w-full items-center justify-center'>
                {isActive && <CheckIcon className='relative z-30 mx-auto w-5 text-white mix-blend-difference' />}
              </i>
            </Tooltip.Trigger>
            <Tooltip.Content
              sideOffset={1}
              className='rounded-md border border-gray-300 bg-gray-50 px-2 py-1 text-xs font-semibold text-gray-700'
            >
              <span className='capitalize'>{name}</span> {!!val && <span className='uppercase'>• {val}</span>}
            </Tooltip.Content>
          </Tooltip.Root>
        );
      })}
    </div>
  );
};
export default memo(SwatchList, () => true);
