import { useState, useEffect } from 'react';

export default function TestPage() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleClick = () => {
    setTimeout(() => {
      setShowConfirmation(true);
    }, 5000);
  };

  useEffect(() => {
    if (showConfirmation) {
      confirm('クリックしました');
      setShowConfirmation(false); // 確認ダイアログを閉じた後に状態をリセット
    }
  }, [showConfirmation]);

  return (
    <div>


        <h1>buttonPage</h1>
        <button className='bg-gray-300 m-20 p-5' onClick={handleClick}>確認</button>


        
    </div>
  );
}