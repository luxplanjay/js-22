/*
 * Напиши скрипт проверки подписки пользователя при доступе к контенту
 * - Есть три типа подписки: free, pro и vip.
 * - Получить доступ могут только пользователи pro и vip
 */

const sub = 'free';

// если пользователь pro или пользователь vip тогда есть доступ

const canAccessContent =
  sub.toLowerCase() === 'pro' || sub.toLowerCase() === 'vip';
console.log(`Є доступ? ${canAccessContent}`);

// !!false => ТАК НЕ РОБИТИ
