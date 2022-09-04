import JournalDate from './JournalDate';

function CreateJournal(props) {
  return (
    <div>
      <JournalDate date={props.date}/>
      <div>{props.dayswork}</div>
      <div>
        <h2>{props.qs}</h2>
        <h2>{props.themes}</h2>
      </div>
    </div>
  );
}

export default CreateJournal;