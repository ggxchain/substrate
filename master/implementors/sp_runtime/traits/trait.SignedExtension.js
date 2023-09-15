(function() {var implementors = {
"frame_system":[["impl&lt;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"frame_system/struct.CheckGenesis.html\" title=\"struct frame_system::CheckGenesis\">CheckGenesis</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"frame_system/struct.CheckWeight.html\" title=\"struct frame_system::CheckWeight\">CheckWeight</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.RuntimeCall\" title=\"type frame_system::pallet::Config::RuntimeCall\">RuntimeCall</a>: <a class=\"trait\" href=\"sp_runtime/traits/trait.Dispatchable.html\" title=\"trait sp_runtime::traits::Dispatchable\">Dispatchable</a>&lt;Info = <a class=\"struct\" href=\"frame_support/dispatch/struct.DispatchInfo.html\" title=\"struct frame_support::dispatch::DispatchInfo\">DispatchInfo</a>, PostInfo = <a class=\"struct\" href=\"frame_support/dispatch/struct.PostDispatchInfo.html\" title=\"struct frame_support::dispatch::PostDispatchInfo\">PostDispatchInfo</a>&gt;,</span>"],["impl&lt;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"frame_system/struct.CheckSpecVersion.html\" title=\"struct frame_system::CheckSpecVersion\">CheckSpecVersion</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"frame_system/struct.CheckNonce.html\" title=\"struct frame_system::CheckNonce\">CheckNonce</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.RuntimeCall\" title=\"type frame_system::pallet::Config::RuntimeCall\">RuntimeCall</a>: <a class=\"trait\" href=\"sp_runtime/traits/trait.Dispatchable.html\" title=\"trait sp_runtime::traits::Dispatchable\">Dispatchable</a>&lt;Info = <a class=\"struct\" href=\"frame_support/dispatch/struct.DispatchInfo.html\" title=\"struct frame_support::dispatch::DispatchInfo\">DispatchInfo</a>&gt;,</span>"],["impl&lt;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"frame_system/struct.CheckTxVersion.html\" title=\"struct frame_system::CheckTxVersion\">CheckTxVersion</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"frame_system/struct.CheckMortality.html\" title=\"struct frame_system::CheckMortality\">CheckMortality</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"frame_system/struct.CheckNonZeroSender.html\" title=\"struct frame_system::CheckNonZeroSender\">CheckNonZeroSender</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.RuntimeCall\" title=\"type frame_system::pallet::Config::RuntimeCall\">RuntimeCall</a>: <a class=\"trait\" href=\"sp_runtime/traits/trait.Dispatchable.html\" title=\"trait sp_runtime::traits::Dispatchable\">Dispatchable</a>&lt;Info = <a class=\"struct\" href=\"frame_support/dispatch/struct.DispatchInfo.html\" title=\"struct frame_support::dispatch::DispatchInfo\">DispatchInfo</a>&gt;,</span>"]],
"pallet_asset_conversion_tx_payment":[["impl&lt;T: <a class=\"trait\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_conversion_tx_payment::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"pallet_asset_conversion_tx_payment/struct.ChargeAssetTxPayment.html\" title=\"struct pallet_asset_conversion_tx_payment::ChargeAssetTxPayment\">ChargeAssetTxPayment</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.RuntimeCall\" title=\"type frame_system::pallet::Config::RuntimeCall\">RuntimeCall</a>: <a class=\"trait\" href=\"sp_runtime/traits/trait.Dispatchable.html\" title=\"trait sp_runtime::traits::Dispatchable\">Dispatchable</a>&lt;Info = <a class=\"struct\" href=\"frame_support/dispatch/struct.DispatchInfo.html\" title=\"struct frame_support::dispatch::DispatchInfo\">DispatchInfo</a>, PostInfo = <a class=\"struct\" href=\"frame_support/dispatch/struct.PostDispatchInfo.html\" title=\"struct frame_support::dispatch::PostDispatchInfo\">PostDispatchInfo</a>&gt;,\n    &lt;&lt;T as <a class=\"trait\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_conversion_tx_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html#associatedtype.Fungibles\" title=\"type pallet_asset_conversion_tx_payment::pallet::Config::Fungibles\">Fungibles</a> as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Inspect\">Inspect</a>&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html#associatedtype.Balance\" title=\"type frame_support::traits::tokens::fungibles::regular::Inspect::Balance\">Balance</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    &lt;&lt;T as Config&gt;::OnChargeTransaction as OnChargeTransaction&lt;T&gt;&gt;::Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u64.html\">u64</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;&lt;&lt;T as <a class=\"trait\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_conversion_tx_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html#associatedtype.OnChargeAssetTransaction\" title=\"type pallet_asset_conversion_tx_payment::pallet::Config::OnChargeAssetTransaction\">OnChargeAssetTransaction</a> as <a class=\"trait\" href=\"pallet_asset_conversion_tx_payment/trait.OnChargeAssetTransaction.html\" title=\"trait pallet_asset_conversion_tx_payment::OnChargeAssetTransaction\">OnChargeAssetTransaction</a>&lt;T&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_asset_conversion_tx_payment/trait.OnChargeAssetTransaction.html#associatedtype.Balance\" title=\"type pallet_asset_conversion_tx_payment::OnChargeAssetTransaction::Balance\">Balance</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;&lt;&lt;T as <a class=\"trait\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_conversion_tx_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html#associatedtype.OnChargeAssetTransaction\" title=\"type pallet_asset_conversion_tx_payment::pallet::Config::OnChargeAssetTransaction\">OnChargeAssetTransaction</a> as <a class=\"trait\" href=\"pallet_asset_conversion_tx_payment/trait.OnChargeAssetTransaction.html\" title=\"trait pallet_asset_conversion_tx_payment::OnChargeAssetTransaction\">OnChargeAssetTransaction</a>&lt;T&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_asset_conversion_tx_payment/trait.OnChargeAssetTransaction.html#associatedtype.LiquidityInfo\" title=\"type pallet_asset_conversion_tx_payment::OnChargeAssetTransaction::LiquidityInfo\">LiquidityInfo</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&lt;&lt;T as <a class=\"trait\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_conversion_tx_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html#associatedtype.OnChargeAssetTransaction\" title=\"type pallet_asset_conversion_tx_payment::pallet::Config::OnChargeAssetTransaction\">OnChargeAssetTransaction</a> as <a class=\"trait\" href=\"pallet_asset_conversion_tx_payment/trait.OnChargeAssetTransaction.html\" title=\"trait pallet_asset_conversion_tx_payment::OnChargeAssetTransaction\">OnChargeAssetTransaction</a>&lt;T&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_asset_conversion_tx_payment/trait.OnChargeAssetTransaction.html#associatedtype.LiquidityInfo\" title=\"type pallet_asset_conversion_tx_payment::OnChargeAssetTransaction::LiquidityInfo\">LiquidityInfo</a>&gt;,\n    &lt;&lt;T as <a class=\"trait\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_conversion_tx_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html#associatedtype.OnChargeAssetTransaction\" title=\"type pallet_asset_conversion_tx_payment::pallet::Config::OnChargeAssetTransaction\">OnChargeAssetTransaction</a> as <a class=\"trait\" href=\"pallet_asset_conversion_tx_payment/trait.OnChargeAssetTransaction.html\" title=\"trait pallet_asset_conversion_tx_payment::OnChargeAssetTransaction\">OnChargeAssetTransaction</a>&lt;T&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_asset_conversion_tx_payment/trait.OnChargeAssetTransaction.html#associatedtype.AssetId\" title=\"type pallet_asset_conversion_tx_payment::OnChargeAssetTransaction::AssetId\">AssetId</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span>"]],
"pallet_asset_tx_payment":[["impl&lt;T: <a class=\"trait\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_tx_payment::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"pallet_asset_tx_payment/struct.ChargeAssetTxPayment.html\" title=\"struct pallet_asset_tx_payment::ChargeAssetTxPayment\">ChargeAssetTxPayment</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.RuntimeCall\" title=\"type frame_system::pallet::Config::RuntimeCall\">RuntimeCall</a>: <a class=\"trait\" href=\"sp_runtime/traits/trait.Dispatchable.html\" title=\"trait sp_runtime::traits::Dispatchable\">Dispatchable</a>&lt;Info = <a class=\"struct\" href=\"frame_support/dispatch/struct.DispatchInfo.html\" title=\"struct frame_support::dispatch::DispatchInfo\">DispatchInfo</a>, PostInfo = <a class=\"struct\" href=\"frame_support/dispatch/struct.PostDispatchInfo.html\" title=\"struct frame_support::dispatch::PostDispatchInfo\">PostDispatchInfo</a>&gt;,\n    &lt;&lt;T as <a class=\"trait\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_tx_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html#associatedtype.Fungibles\" title=\"type pallet_asset_tx_payment::pallet::Config::Fungibles\">Fungibles</a> as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Inspect\">Inspect</a>&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html#associatedtype.Balance\" title=\"type frame_support::traits::tokens::fungibles::regular::Inspect::Balance\">Balance</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    &lt;&lt;T as Config&gt;::OnChargeTransaction as OnChargeTransaction&lt;T&gt;&gt;::Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u64.html\">u64</a>&gt; + <a class=\"trait\" href=\"frame_support/traits/misc/trait.IsType.html\" title=\"trait frame_support::traits::misc::IsType\">IsType</a>&lt;&lt;&lt;T as <a class=\"trait\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_tx_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html#associatedtype.OnChargeAssetTransaction\" title=\"type pallet_asset_tx_payment::pallet::Config::OnChargeAssetTransaction\">OnChargeAssetTransaction</a> as <a class=\"trait\" href=\"pallet_asset_tx_payment/trait.OnChargeAssetTransaction.html\" title=\"trait pallet_asset_tx_payment::OnChargeAssetTransaction\">OnChargeAssetTransaction</a>&lt;T&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/trait.OnChargeAssetTransaction.html#associatedtype.Balance\" title=\"type pallet_asset_tx_payment::OnChargeAssetTransaction::Balance\">Balance</a>&gt;,\n    &lt;&lt;T as <a class=\"trait\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_tx_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html#associatedtype.OnChargeAssetTransaction\" title=\"type pallet_asset_tx_payment::pallet::Config::OnChargeAssetTransaction\">OnChargeAssetTransaction</a> as <a class=\"trait\" href=\"pallet_asset_tx_payment/trait.OnChargeAssetTransaction.html\" title=\"trait pallet_asset_tx_payment::OnChargeAssetTransaction\">OnChargeAssetTransaction</a>&lt;T&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/trait.OnChargeAssetTransaction.html#associatedtype.AssetId\" title=\"type pallet_asset_tx_payment::OnChargeAssetTransaction::AssetId\">AssetId</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    <a class=\"type\" href=\"frame_support/traits/tokens/fungibles/imbalance/type.Credit.html\" title=\"type frame_support::traits::tokens::fungibles::imbalance::Credit\">Credit</a>&lt;T::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>, T::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html#associatedtype.Fungibles\" title=\"type pallet_asset_tx_payment::pallet::Config::Fungibles\">Fungibles</a>&gt;: <a class=\"trait\" href=\"frame_support/traits/misc/trait.IsType.html\" title=\"trait frame_support::traits::misc::IsType\">IsType</a>&lt;&lt;&lt;T as <a class=\"trait\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_tx_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html#associatedtype.OnChargeAssetTransaction\" title=\"type pallet_asset_tx_payment::pallet::Config::OnChargeAssetTransaction\">OnChargeAssetTransaction</a> as <a class=\"trait\" href=\"pallet_asset_tx_payment/trait.OnChargeAssetTransaction.html\" title=\"trait pallet_asset_tx_payment::OnChargeAssetTransaction\">OnChargeAssetTransaction</a>&lt;T&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/trait.OnChargeAssetTransaction.html#associatedtype.LiquidityInfo\" title=\"type pallet_asset_tx_payment::OnChargeAssetTransaction::LiquidityInfo\">LiquidityInfo</a>&gt;,</span>"]],
"pallet_example_basic":[["impl&lt;T: <a class=\"trait\" href=\"pallet_example_basic/pallet/trait.Config.html\" title=\"trait pallet_example_basic::pallet::Config\">Config</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"pallet_example_basic/struct.WatchDummy.html\" title=\"struct pallet_example_basic::WatchDummy\">WatchDummy</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    &lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.RuntimeCall\" title=\"type frame_system::pallet::Config::RuntimeCall\">RuntimeCall</a>: <a class=\"trait\" href=\"frame_support/traits/misc/trait.IsSubType.html\" title=\"trait frame_support::traits::misc::IsSubType\">IsSubType</a>&lt;<a class=\"enum\" href=\"pallet_example_basic/pallet/enum.Call.html\" title=\"enum pallet_example_basic::pallet::Call\">Call</a>&lt;T&gt;&gt;,</span>"]],
"pallet_sudo":[["impl&lt;T: <a class=\"trait\" href=\"pallet_sudo/pallet/trait.Config.html\" title=\"trait pallet_sudo::pallet::Config\">Config</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"pallet_sudo/struct.CheckOnlySudoAccount.html\" title=\"struct pallet_sudo::CheckOnlySudoAccount\">CheckOnlySudoAccount</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    &lt;T as <a class=\"trait\" href=\"pallet_sudo/pallet/trait.Config.html\" title=\"trait pallet_sudo::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_sudo/pallet/trait.Config.html#associatedtype.RuntimeCall\" title=\"type pallet_sudo::pallet::Config::RuntimeCall\">RuntimeCall</a>: <a class=\"trait\" href=\"sp_runtime/traits/trait.Dispatchable.html\" title=\"trait sp_runtime::traits::Dispatchable\">Dispatchable</a>&lt;Info = <a class=\"struct\" href=\"frame_support/dispatch/struct.DispatchInfo.html\" title=\"struct frame_support::dispatch::DispatchInfo\">DispatchInfo</a>&gt;,</span>"]],
"pallet_transaction_payment":[["impl&lt;T: <a class=\"trait\" href=\"pallet_transaction_payment/pallet/trait.Config.html\" title=\"trait pallet_transaction_payment::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"pallet_transaction_payment/struct.ChargeTransactionPayment.html\" title=\"struct pallet_transaction_payment::ChargeTransactionPayment\">ChargeTransactionPayment</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    &lt;&lt;T as <a class=\"trait\" href=\"pallet_transaction_payment/pallet/trait.Config.html\" title=\"trait pallet_transaction_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_transaction_payment/pallet/trait.Config.html#associatedtype.OnChargeTransaction\" title=\"type pallet_transaction_payment::pallet::Config::OnChargeTransaction\">OnChargeTransaction</a> as <a class=\"trait\" href=\"pallet_transaction_payment/trait.OnChargeTransaction.html\" title=\"trait pallet_transaction_payment::OnChargeTransaction\">OnChargeTransaction</a>&lt;T&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_transaction_payment/trait.OnChargeTransaction.html#associatedtype.Balance\" title=\"type pallet_transaction_payment::OnChargeTransaction::Balance\">Balance</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u64.html\">u64</a>&gt;,\n    T::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.RuntimeCall\" title=\"type frame_system::pallet::Config::RuntimeCall\">RuntimeCall</a>: <a class=\"trait\" href=\"sp_runtime/traits/trait.Dispatchable.html\" title=\"trait sp_runtime::traits::Dispatchable\">Dispatchable</a>&lt;Info = <a class=\"struct\" href=\"frame_support/dispatch/struct.DispatchInfo.html\" title=\"struct frame_support::dispatch::DispatchInfo\">DispatchInfo</a>, PostInfo = <a class=\"struct\" href=\"frame_support/dispatch/struct.PostDispatchInfo.html\" title=\"struct frame_support::dispatch::PostDispatchInfo\">PostDispatchInfo</a>&gt;,</span>"]],
"sp_runtime":[],
"substrate_test_runtime":[["impl <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"substrate_test_runtime/struct.CheckSubstrateCall.html\" title=\"struct substrate_test_runtime::CheckSubstrateCall\">CheckSubstrateCall</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()