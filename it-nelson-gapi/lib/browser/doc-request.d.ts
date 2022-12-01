export declare const request_1: {
    insertText: {
        location: {
            index: number;
        };
        text: string;
    };
}[];
export declare const request_2: ({
    insertTable: {
        columns: number;
        rows: number;
        endOfSegmentLocation: {};
    };
    insertText?: undefined;
    insertInlineImage?: undefined;
} | {
    insertText: {
        location: {
            index: number;
        };
        text: string;
    };
    insertTable?: undefined;
    insertInlineImage?: undefined;
} | {
    insertInlineImage: {
        location: {
            index: number;
        };
        uri: string;
        objectSize: {
            height: {
                magnitude: number;
                unit: string;
            };
            width: {
                magnitude: number;
                unit: string;
            };
        };
    };
    insertTable?: undefined;
    insertText?: undefined;
})[];
export declare const request_3: ({
    insertTable: {
        endOfSegmentLocation: {
            segmentId: string;
        };
        columns: number;
        rows: number;
    };
    insertText?: undefined;
} | {
    insertText: {
        location: {
            index: number;
        };
        text: string;
    };
    insertTable?: undefined;
})[];
export declare const request_test: ({
    insertTable: {
        endOfSegmentLocation: {
            segmentId: string;
        };
        columns: number;
        rows: number;
    };
    insertText?: undefined;
} | {
    insertText: {
        location: {
            index: number;
        };
        text: string;
    };
    insertTable?: undefined;
})[];
export declare const request_4: ({
    insertTable: {
        endOfSegmentLocation: {
            segmentId: string;
        };
        columns: number;
        rows: number;
    };
    insertText?: undefined;
    insertInlineImage?: undefined;
} | {
    insertText: {
        text: string;
        location: {
            index: number;
        };
        endOfSegmentLocation?: undefined;
    };
    insertTable?: undefined;
    insertInlineImage?: undefined;
} | {
    insertText: {
        text: string;
        endOfSegmentLocation: {
            segmentId: string;
        };
        location?: undefined;
    };
    insertTable?: undefined;
    insertInlineImage?: undefined;
} | {
    insertInlineImage: {
        location: {
            index: number;
        };
        uri: string;
        objectSize: {
            height: {
                magnitude: number;
                unit: string;
            };
            width: {
                magnitude: number;
                unit: string;
            };
        };
    };
    insertTable?: undefined;
    insertText?: undefined;
})[];
export declare const request_tb_1: {
    insertTable: {
        columns: number;
        rows: number;
        endOfSegmentLocation: {};
    };
}[];
export declare function creaReq(): any;
export declare function creaReq_0(dati: any): any;
export declare function creaReq_Aij(dati: any): any;
//# sourceMappingURL=doc-request.d.ts.map