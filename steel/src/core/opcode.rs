use serde::{Deserialize, Serialize};

#[repr(u8)]
#[derive(Copy, Clone, Debug, Hash, PartialEq, Serialize, Deserialize)]
pub enum OpCode {
    VOID = 0,
    PUSH = 1,
    LOOKUP = 2,
    IF = 3,
    JMP = 4,
    FUNC = 5,
    SCLOSURE = 6,
    ECLOSURE = 7,
    STRUCT = 8,
    POP = 9,
    BIND = 10,
    SDEF = 11,
    EDEF = 12,
    PASS,
    PUSHCONST,
    NDEFS,
    EVAL,
    PANIC,
    CLEAR,
    TAILCALL,
    // APPLY,
    SET,
    COLLECT,
    TRANSDUCE,
    READ,
    COLLECTTO,
    METALOOKUP,
    CALLCC,
    READLOCAL,
    SETLOCAL,
    READUPVALUE,
    SETUPVALUE,
    FILLUPVALUE,
    FILLLOCALUPVALUE,
    CLOSEUPVALUE, // Should be 1 for close, 0 for not
    TCOJMP,
    CALLGLOBAL,
    CALLGLOBALTAIL,
    LOADINT0, // Load const 0
    LOADINT1,
    LOADINT2,
    CGLOCALCONST,
    INNERSTRUCT,
    MOVEREADLOCAL,
    MOVEREADUPVALUE,
}
