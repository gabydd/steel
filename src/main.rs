use std::error::Error;

use clap::Parser;
use steel_client::Args;

fn main() -> Result<(), Box<dyn Error>> {
    // env_logger::init();

    // let mut builder = env_logger::Builder::new();

    // let log_targets = [];

    // for target in log_targets {
    //     builder.filter(Some(target), log::LevelFilter::Trace);
    // }

    // builder.init();

    let clap_args = Args::parse();

    steel_client::run(clap_args)?;

    Ok(())
}
