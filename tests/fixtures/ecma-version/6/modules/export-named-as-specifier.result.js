module.exports = {
    "type": "Program",
    "start": 0,
    "end": 39,
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 2,
            "column": 20
        }
    },
    "range": [
        0,
        39
    ],
    "body": [
        {
            "type": "VariableDeclaration",
            "start": 0,
            "end": 18,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 18
                }
            },
            "range": [
                0,
                18
            ],
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "start": 6,
                    "end": 17,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 6
                        },
                        "end": {
                            "line": 1,
                            "column": 17
                        }
                    },
                    "range": [
                        6,
                        17
                    ],
                    "id": {
                        "type": "Identifier",
                        "start": 6,
                        "end": 9,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 6
                            },
                            "end": {
                                "line": 1,
                                "column": 9
                            }
                        },
                        "range": [
                            6,
                            9
                        ],
                        "name": "foo"
                    },
                    "init": {
                        "type": "Literal",
                        "start": 12,
                        "end": 17,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 12
                            },
                            "end": {
                                "line": 1,
                                "column": 17
                            }
                        },
                        "range": [
                            12,
                            17
                        ],
                        "value": "foo",
                        "raw": "\"foo\""
                    }
                }
            ],
            "kind": "const"
        },
        {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 39,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 0
                },
                "end": {
                    "line": 2,
                    "column": 20
                }
            },
            "range": [
                19,
                39
            ],
            "declaration": null,
            "specifiers": [
                {
                    "type": "ExportSpecifier",
                    "start": 27,
                    "end": 37,
                    "loc": {
                        "start": {
                            "line": 2,
                            "column": 8
                        },
                        "end": {
                            "line": 2,
                            "column": 18
                        }
                    },
                    "range": [
                        27,
                        37
                    ],
                    "local": {
                        "type": "Identifier",
                        "start": 27,
                        "end": 30,
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 8
                            },
                            "end": {
                                "line": 2,
                                "column": 11
                            }
                        },
                        "range": [
                            27,
                            30
                        ],
                        "name": "foo"
                    },
                    "exported": {
                        "type": "Identifier",
                        "start": 34,
                        "end": 37,
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 15
                            },
                            "end": {
                                "line": 2,
                                "column": 18
                            }
                        },
                        "range": [
                            34,
                            37
                        ],
                        "name": "bar"
                    }
                }
            ],
            "source": null
        }
    ],
    "sourceType": "module",
    "tokens": [
        {
            "type": "Keyword",
            "value": "const",
            "start": 0,
            "end": 5,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 5
                }
            },
            "range": [
                0,
                5
            ]
        },
        {
            "type": "Identifier",
            "value": "foo",
            "start": 6,
            "end": 9,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 6
                },
                "end": {
                    "line": 1,
                    "column": 9
                }
            },
            "range": [
                6,
                9
            ]
        },
        {
            "type": "Punctuator",
            "value": "=",
            "start": 10,
            "end": 11,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 10
                },
                "end": {
                    "line": 1,
                    "column": 11
                }
            },
            "range": [
                10,
                11
            ]
        },
        {
            "type": "String",
            "value": "\"foo\"",
            "start": 12,
            "end": 17,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 12
                },
                "end": {
                    "line": 1,
                    "column": 17
                }
            },
            "range": [
                12,
                17
            ]
        },
        {
            "type": "Punctuator",
            "value": ";",
            "start": 17,
            "end": 18,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 17
                },
                "end": {
                    "line": 1,
                    "column": 18
                }
            },
            "range": [
                17,
                18
            ]
        },
        {
            "type": "Keyword",
            "value": "export",
            "start": 19,
            "end": 25,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 0
                },
                "end": {
                    "line": 2,
                    "column": 6
                }
            },
            "range": [
                19,
                25
            ]
        },
        {
            "type": "Punctuator",
            "value": "{",
            "start": 26,
            "end": 27,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 7
                },
                "end": {
                    "line": 2,
                    "column": 8
                }
            },
            "range": [
                26,
                27
            ]
        },
        {
            "type": "Identifier",
            "value": "foo",
            "start": 27,
            "end": 30,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 8
                },
                "end": {
                    "line": 2,
                    "column": 11
                }
            },
            "range": [
                27,
                30
            ]
        },
        {
            "type": "Identifier",
            "value": "as",
            "start": 31,
            "end": 33,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 12
                },
                "end": {
                    "line": 2,
                    "column": 14
                }
            },
            "range": [
                31,
                33
            ]
        },
        {
            "type": "Identifier",
            "value": "bar",
            "start": 34,
            "end": 37,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 15
                },
                "end": {
                    "line": 2,
                    "column": 18
                }
            },
            "range": [
                34,
                37
            ]
        },
        {
            "type": "Punctuator",
            "value": "}",
            "start": 37,
            "end": 38,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 18
                },
                "end": {
                    "line": 2,
                    "column": 19
                }
            },
            "range": [
                37,
                38
            ]
        },
        {
            "type": "Punctuator",
            "value": ";",
            "start": 38,
            "end": 39,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 19
                },
                "end": {
                    "line": 2,
                    "column": 20
                }
            },
            "range": [
                38,
                39
            ]
        }
    ]
};
