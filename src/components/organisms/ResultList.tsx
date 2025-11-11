import Text from "../atoms/Text";
import Heading from "../atoms/Heading";

export default function ResultList() {
  return (
    <div className="result-list">
      <Heading level={3}>Dine anbefalede dyner</Heading>
      <Text variant="body">
        Resultater kommer her, når quizzen er færdig.
      </Text>
    </div>
  );
}