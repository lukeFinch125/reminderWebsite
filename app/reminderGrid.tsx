const ReminderGrid = () => {

    type Reminder = {
        title: string;
        description: string;
        date: Date;
    };

    const reminders: Reminder[] = [];

    return (
      <>
        <div className="border-2 border-black h-[60vh] w-[90vw] grid grid-cols-3 grid-rows-3 gap-2 p-2">
          <div className="row-span-3 border-2 border-black">
                {reminders array.forEach(element => {
                    
                })};
          </div>
        </div>
      </>
    );
};

export default ReminderGrid;