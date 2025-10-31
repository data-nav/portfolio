import TypingText from '../TypingText';

export default function TypingTextExample() {
  return (
    <div className="p-8 bg-background">
      <h1 className="text-4xl font-bold">
        A passionate{" "}
        <span className="text-primary">
          <TypingText
            phrases={["Data Analyst", "Data Engineer", "Data Scientist", "ML Engineer"]}
          />
        </span>
      </h1>
    </div>
  );
}
