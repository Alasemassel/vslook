import Button from 'components/Button';
import Menu from 'components/Menu';
import { useState } from 'react';
import { RgbaColorPicker } from 'react-colorful';
import { useRecoilState } from 'recoil';
import { formatState } from 'states';
import { getColorValues, getHexFromValues, getColorString } from 'utils';
import PickerInputs from './PickerInputs';
import PickerNameForm from './PickerNameForm';

export default ({ value, onChange }) => {
  const values = getColorValues(value);
  const [format, setFormat] = useRecoilState(formatState);
  const [showForm, setShowForm] = useState(false);

  const handleChange = values => onChange(getHexFromValues(values), { select: true });

  return (
    <Menu>
      {() => (
        <button className='bg-pattern-rectangle radix-peer h-6 flex-1 overflow-hidden rounded-l-md'>
          <i style={{ background: value }} className='block h-full w-full' />
        </button>
      )}
      {({ setOpen }) => (
        <div className='w-64 p-2.5'>
          <RgbaColorPicker color={values.rgb} onChange={handleChange} />
          <PickerInputs format={format} values={values[format]} onChange={handleChange} onFormatChange={setFormat} />
          {!showForm ? (
            <Button label='Add to palette' variant='outline' onClick={() => setShowForm(true)} />
          ) : (
            <PickerNameForm
              value={getColorString(value, format)}
              onHideMenu={() => setOpen(false)}
              onHideForm={() => setShowForm(false)}
            />
          )}
        </div>
      )}
    </Menu>
  );
};
