
    export class ExString {
        public static Empty: string = "";

        public static Format(value, ...args): string {
            try {
                return value.replace(/{(\d+(:.*)?)}/g, function (match, i) {
                    var s = match.split(':');
                    if (s.length > 1) {
                        i = i[0];
                        match = s[1].replace('}', '');
                    }

                    var arg = ExString.formatPattern(match, args[i]);
                    return typeof arg != 'undefined' && arg != null ? arg : ExString.Empty;
                });
            }
            catch (e) {
                return ExString.Empty;
            }
        }

        private static formatPattern(match, arg): string {
            switch (match) {
                case 'L':
                    arg = arg.toLowerCase();
                    break;
                case 'U':
                    arg = arg.toUpperCase();
                    break;
                default:
                    break;
            }

            return arg;
        }
    }
