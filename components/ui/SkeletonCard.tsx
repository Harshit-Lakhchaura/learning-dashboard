export function SkeletonCard() {
  return (
    <div style={{
      backgroundColor: '#1a1a24',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '16px',
      padding: '22px',
      minHeight: '165px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    }}>
      {/* Icon skeleton */}
      <div style={{
        width: '44px', height: '44px',
        borderRadius: '10px',
        backgroundColor: 'rgba(255,255,255,0.08)',
      }} />

      {/* Text skeleton */}
      <div>
        <div style={{
          height: '14px', width: '70%',
          backgroundColor: 'rgba(255,255,255,0.08)',
          borderRadius: '6px', marginBottom: '8px',
        }} />
        <div style={{
          height: '12px', width: '40%',
          backgroundColor: 'rgba(255,255,255,0.05)',
          borderRadius: '6px',
        }} />
      </div>

      {/* Progress bar skeleton */}
      <div style={{
        height: '6px', width: '100%',
        backgroundColor: 'rgba(255,255,255,0.08)',
        borderRadius: '999px',
      }} />
    </div>
  )
}