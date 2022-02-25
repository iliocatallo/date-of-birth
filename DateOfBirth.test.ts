import tsd from "tsd";
import { test } from 'uvu';

test(`type-checks`, async () => {
	const diagnostics = await tsd({
		cwd: process.cwd(),
		typingsFile: "types/DateOfBirth.d.ts",
		testFiles: ["DateOfBirth.test-d.ts"]
	});

	if (diagnostics.length != 0) {
		// https://github.com/iccicci/sedentary/blob/master/test/98types.ts
		throw new Error("types\n\n" + diagnostics.map(_ => `${_.fileName}:${_.line}:${_.column}:${_.severity}:${_.message}`).join("\n") + "\n")
	}
})

test.run()