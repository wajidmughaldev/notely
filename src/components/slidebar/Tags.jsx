import React from 'react';
import clsx from 'clsx';
import useNoteStore from '../../store/NoteStore';

const Tags = ({ direction = 'col', selectedNoteColor, handleTagColor = () => {} }) => {
  const colors = {
    urgent: '#FF6060',
    green: '#43FF6F',
    warning: '#FFBE44',
    gray: '#D9D9D9',
  };

  const filterNotesByTagColor = useNoteStore((state) => state.filterNotesByTagColor);

  return (
    <ul className={clsx('flex gap-2', direction === 'col' ? 'flex-col' : 'flex-row')}>
      {Object.entries(colors).map(([name, color], index) => (
        <li
          key={index}
          className={clsx(
            'w-[30px] h-[30px] rounded-full cursor-pointer transition-all duration-200',
            selectedNoteColor === color
              ? ' outline-4 outline-dashed outline-stone-600'
              : 'opacity-70 hover:opacity-100'
          )}
          style={{ backgroundColor: color }}
          onClick={() => {
            handleTagColor(color);
            filterNotesByTagColor(color);
          }}
        />
      ))}
    </ul>
  );
};

export default Tags;
