import { headers } from 'next/headers';
import StatusLabel, { Status } from './components/status-label';
import AddCompanyButton from './components/add-company-button';

export default function Home() {
  console.log(headers());

  return (
    <main>
      <h1 className="text-xl">Home {new Date().toLocaleTimeString()}</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
      <AddCompanyButton />
    </main>
  );
}
