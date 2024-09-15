/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, FirestoreError } from "firebase/firestore";
import { db } from "../database/firebaseConfig";
import { QuizDocument } from "../models/quizDocument";

function useDataFetcher(query: string): {
	data: QuizDocument[];
	loading: boolean;
	error: FirestoreError | undefined;
} {
	const [snapshot, loading, error] = useCollection(collection(db, query), {
		snapshotListenOptions: { includeMetadataChanges: true },
	});
	const data = snapshot?.docs.map((doc: any): QuizDocument => {
		const data = doc._document.data.value.mapValue.fields;
		return {
			answer: data.answer.stringValue,
			choices: data.choices.arrayValue.values.map(
				(val: any) => val.stringValue
			),
			question: data.question.stringValue,
		};
	}) as unknown as QuizDocument[];
	return { data, loading, error };
}

export default useDataFetcher;
