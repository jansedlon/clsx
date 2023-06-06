function toVal(mix) {
	var k,
		y,
		str = "";

	if (typeof mix === "string" || typeof mix === "number") {
		str += mix;
	} else if (typeof mix === "object") {
		if (Array.isArray(mix)) {
			for (k = 0; k < mix.length; k++) {
				if (mix[k]) {
					if ((y = toVal(mix[k]))) {
						str && (str += " ");
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += " ");
					str += k;
				}
			}
		}
	}

	return str;
}

export type ClassValue =
	| ClassArray
	| ClassDictionary
	| string
	| number
	| null
	| boolean
	| undefined;
export type ClassDictionary = Record<string, any>;
export type ClassArray = ClassValue[];

export default function clsx(..._: ClassValue[]) {
	var i = 0,
		tmp,
		x,
		str = "";
	while (i < arguments.length) {
		if ((tmp = arguments[i++])) {
			if ((x = toVal(tmp))) {
				str && (str += " ");
				str += x;
			}
		}
	}
	return str;
}
