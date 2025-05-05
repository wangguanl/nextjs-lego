import { nanoid } from 'nanoid';
import Link from 'next/link';
import { Button } from 'antd';
export default function ControlBar() {
  return (
    <div className="flex justify-end">
      <Button type="primary">
        <Link href={`/lego/${nanoid()}`}>创建</Link>
      </Button>
    </div>
  );
}
