function QuoteBox({ text, author }: { text: string; author: string }) {
  return (
    <div className="max-w-2xl mx-auto flex flex-col">
      <div className="p-6 border border-white quote quote-before text-white">
        <p className="text-xl font-medium">{text}</p>
      </div>
      <div className="p-4 border border-white self-end border-t-0">
        <p className="text-white text-xl font-medium">- {author}</p>
      </div>
    </div>
  );
}

export default QuoteBox;
